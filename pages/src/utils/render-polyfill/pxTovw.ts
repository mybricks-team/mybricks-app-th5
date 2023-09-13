const options = {
  minPixelValue: 1,
  unitPrecision: 13,
};

function pxTovw() {
  const viewportUnit = 'vw',
    viewportSize = 375;

  return function (m) {
    const $1 = m.replace('px', '');
    const pixels = Number($1);
    if (isNaN(pixels)) return m;
    if (Math.abs(pixels) <= options.minPixelValue) return m;
    const parsedVal = toFixed((pixels / viewportSize) * 100, options.unitPrecision);
    return parsedVal === 0 ? '0' : parsedVal + viewportUnit;
  };
}

function toFixed(number, precision) {
  const multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return (Math.round(wholeNumber / 10) * 10) / multiplier;
}

const oriCreateElement = React.createElement;

React.createElement = function (type, props, ...args) {
  if (props?.style) {
    Object.keys(props.style).forEach(function (key) {
      if (/[\d.]+(px)$/.test(props.style[key])) {
        props.style[key] = props.style[key].replace(/[\d.]+(px)$/g, function (e) {
          const res = pxTovw();
          return res(e);
        });
      }
    });
  }

  if (props?.dangerouslySetInnerHTML?.__html) {
    props.dangerouslySetInnerHTML.__html = props.dangerouslySetInnerHTML.__html.replace(
      /style="[^\\"]*?"/g,
      function (e) {
        return e.replace(/[\d.]+(px)/g, function (e) {
          const res = pxTovw();
          return res(e);
        });
      },
    );
  }

  return oriCreateElement.apply(null, [type, props, ...args]);
};
