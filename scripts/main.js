
function $(s,ctx=document){return ctx.querySelector(s)}
function $all(s,ctx=document){return [...ctx.querySelectorAll(s)]}
const sleep = (ms)=> new Promise(r=>setTimeout(r,ms))

async function typeInto(el, text, speed=12){
  el.innerHTML = ''
  for (const ch of text){
    el.innerHTML += ch === '\n' ? '<br>' : ch
    await sleep(speed)
  }
}

function initBotDemo(config){
  const root = $(config.root)
  if(!root) return
  const modeChat = $('.tab-chat', root)
  const modeFeature = $('.tab-feature', root)
  const input = $('textarea', root)
  const out = $('.output', root)
  const sampleSelect = $('.sample-select', root)
  // initial
  typeInto(out, config.welcome || 'Ready to help!')
  modeChat.addEventListener('click', ()=>{
    root.dataset.mode='chat'
  })
  modeFeature.addEventListener('click', ()=>{
    root.dataset.mode='feature'
  })
  $('.run', root).addEventListener('click', async ()=>{
    if(root.dataset.mode === 'feature'){
      const val = sampleSelect.value
      const txt = (config.samples && config.samples[val]) || 'Sample not available.'
      await typeInto(out, txt, 8)
    }else{
      const q = input.value.trim() || 'Give me something great.'
      await typeInto(out, 'Thinking…', 12)
      await sleep(200)
      // playful bot-like response
      const reply = (config.reply||((q)=>`Here’s a quick result for: “${q}”.\n\n• Draft 1\n• Draft 2\n• Draft 3`))(q)
      await typeInto(out, reply, 8)
    }
  })
}
