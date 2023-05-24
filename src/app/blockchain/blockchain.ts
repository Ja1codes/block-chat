import { SHA256 } from "crypto-js";

export class Block {
  constructor(chainId: string, index: number, timeStamp: Date, data: any, previousHash = '') {
    this.chainId = chainId;
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = '';
  }

  chainId: string;
  index: number;
  timeStamp: Date;
  data: any;
  previousHash: any;
  hash: any;

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timeStamp + JSON.stringify(this.data)).toString();
  }
}

export class BlockChain {
  constructor(chainId: string);
  constructor(chainId: string, genesisBlock: Block)
  constructor(chainId?: string, genesisBlock?: Block) {
    if (genesisBlock === undefined && chainId !== undefined) {
      this.chainId = chainId;
      this.chain = [this.createGenesisBlock(chainId)];
    }
    else if (genesisBlock !== undefined && chainId !== undefined) {
      this.chainId = chainId;
      this.chain = [genesisBlock];
    }
  }

  chain: Block[] = [];
  chainId!: string;

  createGenesisBlock(chainId: string) {
    return new Block(chainId, 0, new Date(), {}, '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock: Block) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      // if (currentBlock.hash !== this.calculateHash(currentBlock)) {
      //   return false;
      // }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
  calculateHash(block: Block){
    return SHA256(block.index + block.previousHash + block.timeStamp + JSON.stringify(block.data)).toString();
  }
}
