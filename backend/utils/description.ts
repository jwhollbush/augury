import { DebugElement_ as DebugElement }
       from 'angular2/src/core/debug/debug_element';

export abstract class Description {

  public static getComponentDescription(compEl: DebugElement): Object[] {

    const componentInstance = compEl.componentInstance || {};
    const constructor =  componentInstance.constructor;
    const constructorName = constructor.name;
    let componentName = constructorName !== 'Object' ?
      constructorName : compEl.nativeElement.tagName;
    let description = [];
    // console.log(componentName);
    switch (componentName) {
      case 'RouterLink':
        description =  Description._getRouterLinkDesc(compEl);
        break;
      case 'NgSelectOption':
        description = Description._getSelectOptionDesc(compEl);
        break;
      default:
        break;
    }
    return description;
  }

  private static _getRouterLinkDesc(compEl: DebugElement): Object[] {
    let element: HTMLElement = <HTMLElement>(compEl.nativeElement);
    let href = element.getAttribute('href');
    let htmlText = element.innerText;
    return [{
      key: 'href',
      val: href
    }, {
      key: 'htmlText',
      val: htmlText
    }];
  }

  private static _getSelectOptionDesc(compEl: DebugElement): Object[] {
    const elem = <HTMLElement>compEl.nativeElement;
    return [{
      key: 'value',
      val: elem.getAttribute('value')
    }];
  }

}
