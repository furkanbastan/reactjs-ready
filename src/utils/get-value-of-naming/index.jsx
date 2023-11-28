function getValueOfNaming(obj, path) {
    const pathArray = path.split(".");

    let currentObj = obj;

    for (let i = 0; i < pathArray.length; i++) {
        const key = pathArray[i];

        if (currentObj && typeof currentObj === "object" && key in currentObj) {
            currentObj = currentObj[key];
        } else {
            return null;
        }
    }

    return currentObj;
}

export { getValueOfNaming };