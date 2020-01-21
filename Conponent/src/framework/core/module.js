export class Module {
  constructor(config) {
    this.components = config.components;
  }

  start() {
    this.components.forEach(c => {
      c.render();
      c.work();
    });
  }
}
