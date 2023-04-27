import * as shajs from "sha.js";
import { SHA256 } from "crypto-js";
export class Block{
  constructor(index: number, timeStamp: Date, data: any, previousHash = ''){
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = '';
  }
  index: number;
  timeStamp: Date;
  data: any;
  previousHash: any;
  hash: any;
  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timeStamp + JSON.stringify(this.data)).toString();
  }
}

export class BlockChain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }
  chain: Block[] = [];
  createGenesisBlock(){
    return new Block(0, new Date, {}, '0');
  }
  getLatestBlock(){
    return this.chain[this.chain.length-1];
  }
  addBlock(newBlock: Block){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
  isChainValid(){
    for(let i = 1; i< this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i-1];
      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }
      if(currentBlock.previousHash !== previousBlock.hash){
        return false;
      }
    }
    return true;
  }
}
