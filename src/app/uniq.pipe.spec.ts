import { UniqPipe } from './uniq.pipe';

describe('UniqPipe', () => {
  it('create an instance', () => {
    const pipe = new UniqPipe();
    expect(pipe).toBeTruthy();
  });
});
