import { UppercasePipe } from './uppercase.pipe';

describe('Pipe: UppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new UppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
