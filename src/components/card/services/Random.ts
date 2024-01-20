export default class Random {
  private m = 0x80000000;
  private a = 1103515245;
  private c = 12345;
  private state: number;

  constructor(seed: number) {
    this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
  }

  private nextInt() {
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state;
  }

  nextFloat() {
    return this.nextInt() / (this.m - 1);
  }

  /**
   * Return a k length array of unique elements chosen from the population array.
   * Used for random sampling without replacement.
   */
  sample<T>(population: T[], k: number) {
    console.assert(k >= 0, "k must be >= 0");
    console.assert(
      k <= population.length,
      "k must be less than the length of population"
    );
    console.assert(
      population.length !== new Set(population).size,
      "population must be unique"
    );

    const result: T[] = [];
    const populationSize = population.length;
    const set = new Set();
    for (let i = 0; i < k; i++) {
      let j = Math.floor(this.nextFloat() * populationSize);
      while (set.has(j)) {
        j = Math.floor(this.nextFloat() * populationSize);
      }
      set.add(j);
      result.push(population[j]);
    }

    return result;
  }
}
