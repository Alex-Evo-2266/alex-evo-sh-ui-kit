
export interface IOptionModalWindowCord{
    marginBottom?: number
    marginRight?: number
}

export interface IContainerData{
    height: number
    width: number
    left: number
    top: number
}

export const getContainerData = (container: HTMLElement | null) => {
  if (!container) return;

  const style = window.getComputedStyle(container); 
  const rect = container.getBoundingClientRect(); 

  return {
    height: parseFloat(style.getPropertyValue("height")),
    width: parseFloat(style.getPropertyValue("width")),
    left: rect.left,
    top: rect.top
  };
};
 
// export const getModalWindowCord = (x:number, y:number, container:HTMLElement | null, option?:IOptionModalWindowCord) => {
//     let data = {x, y}
//     if(!container)
//         return data
//     let height = Number(window.getComputedStyle(container).getPropertyValue("height").replace("px", ""))
//     let width = Number(window.getComputedStyle(container).getPropertyValue("width").replace("px", ""))
//     let heightDifference = y + height - document.documentElement.clientHeight
//     let widthDifference = x + width - document.documentElement.clientWidth
//     if(heightDifference > 0)
//         data.y = data.y - heightDifference - (option?.marginBottom ?? 0)
//     if(widthDifference > 0)
//         data.x = data.x - widthDifference - (option?.marginRight ?? 0)
//     return data
// }

export const getModalWindowCord = (
  x: number,
  y: number,
  container: HTMLElement | null,
  option?: IOptionModalWindowCord
) => {
  let data = { x, y };

  if (!container) return data;

  const style = window.getComputedStyle(container); // ← один вызов
  const height = parseFloat(style.getPropertyValue("height"));
  const width = parseFloat(style.getPropertyValue("width"));

  const heightDifference =
    y + height - document.documentElement.clientHeight;
  const widthDifference =
    x + width - document.documentElement.clientWidth;

  if (heightDifference > 0)
    data.y = data.y - heightDifference - (option?.marginBottom ?? 0);

  if (widthDifference > 0)
    data.x = data.x - widthDifference - (option?.marginRight ?? 0);

  return data;
};