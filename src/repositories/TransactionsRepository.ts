import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const incomeSum = (
      accumulator: number,
      { type, value }: Transaction,
    ): number => {
      const sum = type === 'income' ? value : 0;
      return accumulator + Number(sum);
    };
    const outcomeSum = (
      accumulator: number,
      { type, value }: Transaction,
    ): number => {
      const sum = type === 'outcome' ? value : 0;
      return accumulator + Number(sum);
    };

    const transactions = await this.find();
    const income = transactions.reduce(incomeSum, 0);
    const outcome = transactions.reduce(outcomeSum, 0);

    const total = income - outcome;
    return { income, outcome, total };
  }
}

export default TransactionsRepository;
