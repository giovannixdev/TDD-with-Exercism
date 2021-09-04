export class BankAccount {
  constructor() {
    this._balance = 0;
    this._status = 'closed';
  }

  open() {
    if (this._status === 'open') {
      throw new ValueError
    }
    this._status = 'open'
  }

  close() {
    if (this._status === 'closed') {
      throw new ValueError
    }
    this._status = 'closed';
    this._balance = 0;
  }

  deposit(amount) {
    if (this._status === 'closed') {
      throw new ValueError
    }
    if (amount < 0) throw new ValueError
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._status === 'closed' || amount > this._balance) {
      throw new ValueError
    }
    if (amount < 0) throw new ValueError
    this._balance -= amount;
  }

  get balance() {
    if (this._status === 'closed') {
      throw new ValueError
    }
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
