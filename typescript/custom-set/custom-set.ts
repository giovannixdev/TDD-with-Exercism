export class CustomSet {
  set: Array<number>;
  constructor(initial: Array<number> = []) {
    this.set = initial;
  }

  empty(): boolean {
    return this.set.length === 0;
  }

  size(): number {
    return this.set.length
  }

  getSet(): Array<number> {
    return [...this.set]
  }

  contains(element: number): boolean {
    return this.set.includes(element)
  }

  add(element: number): CustomSet {
    if (!this.contains(element)) {
      this.set.push(element)
    }
    return this
  }

  subset(other: CustomSet): boolean {
    if (this.empty()) return true
    if (other.empty()) return false
    return this.set.every(ele => other.contains(ele))
  }

  disjoint(other: CustomSet): boolean {
    return !this.set.some(ele => other.contains(ele))
  }

  eql(other: CustomSet): boolean {
    if (this.size() !== other.size()) return false
    // if (this.empty() && other.empty()) return true
    // if (this.empty() || other.empty()) return false
    return this.set.every(ele => other.contains(ele))
  }

  union(other: CustomSet): CustomSet {
    // return new CustomSet(new Set([...this.set, ...other.getSet()]))
    let setClone = new CustomSet(this.set)
    other.getSet().forEach(ele => setClone.add(ele))
    return setClone
  }

  intersection(other: CustomSet): CustomSet {
    return new CustomSet(this.set.filter(ele => other.contains(ele)));    
  }

  difference(other: CustomSet): CustomSet {
    return new CustomSet(this.set.filter(ele => !other.contains(ele))); 
  }
}
