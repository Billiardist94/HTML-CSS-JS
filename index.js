const sampleDataForHTML = [
  {
    type: "div",
    value: "some div value"
  }
  ,
  {
    type: "div",
    value: {
      type: "span",
      value: {
        type: "span",
        value: "last span value"
      }
    }
  }
  
  ,
  {
    type: "p",
    value: "some p value"
  }
];


const buildHTML = (html) =>{
    const buildTag = ({value, type}) =>{

        if (typeof value === 'object'){
            const nestedValue = {
                value: value.value,
                type: value.type
            }
            return `<${type}>${buildTag(nestedValue)}</${type}>`
        }

        return `<${type}>${value}</${type}>`

    }

    const newHtml = html.map((elem)=> buildTag(elem)).join('')


    console.log('newHtml' , newHtml)

}


buildHTML(sampleDataForHTML)