import type { ArticleInput } from './generator';

export const MODELS = ['gpt-5-mini','gpt-5-nano','gpt-4.1-mini'] as const;
export type AiModel = typeof MODELS[number];
export const API_KEY_STORAGE_KEY='article-generator.openai-api-key';

export function buildPrompt(input:ArticleInput){
  const language=input.language==='id'?'Bahasa Indonesia':'English';
  return `Write a complete, useful article in ${language} as Markdown.
Topic: ${input.topic}
Keywords: ${input.keywords||'None provided'}
Tone: ${input.tone}
Length: ${input.length}
Outline: ${input.outline||'Create a logical outline yourself'}
Requirements: return only Markdown; use a clear H1 title and H2 sections; write distinct, substantive paragraphs; naturally use relevant keywords; do not invent statistics, quotes, sources, or unverifiable claims.`;
}
export async function generateWithOpenAI(input:ArticleInput,apiKey:string,model:AiModel,fetcher:typeof fetch=fetch){
  if(!apiKey.trim())throw new Error('Masukkan API key OpenAI untuk menggunakan mode AI.');
  let response:Response;
  try{response=await fetcher('https://api.openai.com/v1/responses',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${apiKey.trim()}`},body:JSON.stringify({model,input:buildPrompt(input)})});}
  catch{throw new Error('Tidak dapat terhubung ke OpenAI. Periksa koneksi internet dan coba lagi.');}
  let data:any={};try{data=await response.json();}catch{}
  if(!response.ok){const detail=data?.error?.message||`HTTP ${response.status}`;throw new Error(`OpenAI API error: ${detail}`);}
  const text=data?.output_text||data?.output?.flatMap((item:any)=>item?.content||[]).find((c:any)=>c?.type==='output_text')?.text;
  if(!text)throw new Error('OpenAI tidak mengembalikan teks artikel.');
  return String(text).trim();
}
