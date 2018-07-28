var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  default() {

  }
  writing() {
    this.fs.copy(
      this.templatePath('../sources/**/*'),
      this.destinationRoot()
    )
    this.fs.copy(
      this.templatePath('../sources/**/.*'),
      this.destinationRoot()
    )
  }
  install() {
    return this.prompt([{
      type: 'list',
      choices: ['npm', 'cnpm', 'yarn'],
      message: '[1/1] Which tools to install dependencies?',
      name: 'tool'
    }]).then((answer) => {
      switch (answer.tool) {
        case 'cnpm':
          this.spawnCommandSync('cnpm', ['install'])
          break;

        case 'npm':
          this.spawnCommandSync('npm', ['install'])
          break;

        case 'yarn':
          this.spawnCommandSync('yarn', ['install'])
      
        default:
          break;
      }
    })
  }
  end() {
    this.log("Install dependencies finished.")
    this.log("Running `npm start` to start dev server...")
    this.spawnCommand('npm', ['start'])
  }
}