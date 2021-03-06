module.exports = {
  nitrogenBases: ['A','C','T','G'],
  mutantChainRegex: /(A{4}|T{4}|C{4}|G{4})/g,
  minMutantChainChanges: 1,
  port: 3000,
  persist: true,
  redis: {
    host: 'redis',
    port: 6379
  }
}
