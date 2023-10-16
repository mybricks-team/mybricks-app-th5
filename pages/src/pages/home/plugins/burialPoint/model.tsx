export const comFilter = (comAry, burialPointComAry) => {
  let newComAry = [];
  const trackPointKeys = Object.keys(burialPointComAry.comTrackPoints);
  for (let i = 0; i < comAry.length; i++) {
    if (trackPointKeys.includes(comAry[i].def.namespace)) {
      newComAry.push(comAry[i]);
    }
  }
  return newComAry;
};

export const getEventTitlesByNamespace = (data, namespace) => {
  const events = data.comTrackPoints[namespace];
  if (!events) {
    return [];
  }

  const result = [];

  for (const [eventName, eventData] of Object.entries(events)) {
    result.push({
      event: eventName,
      title: eventData.title,
    });
  }

  return result;
};

export const generateComInstanceTrack = (
  key,
  targetEventKeyValues,
  title,
  namespace,
  jsonData
) => {
  const result = {
    [key]: {},
  };

  for (const [eventName, eventData] of Object.entries(
    jsonData.comTrackPoints[namespace]
  )) {
    result[key][eventName] = {
      common: {
        title: title,
        namespace: namespace,
      },
      extra: targetEventKeyValues[eventName] || {}, // 添加指定的键值对，如果没有则默认为空对象
    };
  }

  return result;
}
