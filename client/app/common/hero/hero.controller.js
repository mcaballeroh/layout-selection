class HeroController {
  constructor() {
    this.name = 'hero';
    this.selectedTemp = '';
    this.templates = [
      {
        elements : ['left', 'middle', 'right'],
        name : 'lay1',
        file : 'app/common/hero/layouts/firstLayout.html'
      },
      {
        name : 'lay2',
        file : 'app/common/hero/layouts/secondLayout.html'
      },
      {
        name : 'lay3',
        file : 'app/common/hero/layouts/thirdLayout.html'
      },
      {
        name : 'lay4',
        file : 'app/common/hero/layouts/fourthLayout.html'
      },
      {
        name : 'lay5',
        file : 'app/common/hero/layouts/fifthLayout.html'
      }

    ];
  }

  cl(name){
    console.log(name);
    if(name === this.selectedTemp){
      this.selectedTemp = '';
    }else{
      this.selectedTemp = name;
    }
  }
}

export default HeroController;
