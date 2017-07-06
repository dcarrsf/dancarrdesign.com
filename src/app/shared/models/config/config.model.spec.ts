import { ConfigVO } from './config.model';

describe('Model: ConfigVO', () => {
  it('should create an instance', () => {
    const model = new ConfigVO(0, 'test', './');
    expect(model).toBeTruthy();
  });
});