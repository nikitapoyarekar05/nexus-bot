import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"

export const textsplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 150,
    chunkOverlap: 20,
    separators: [" "]
})

export const chunkContent = async (content:string) => {
    return await textsplitter.splitText(content.trim())
}