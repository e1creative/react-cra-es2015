const choice = (items) => {
    // returns a randomly selected item from our array
    const selectionIdx = Math.floor(Math.random() * items.length + 1);
    return items[selectionIdx];
};

const remove = (items, item) => {
    // removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
    if (items.indexOf(item) > -1){
        // splice will return the removed item, NOT the mutated array
        return items.splice(items.indexOf(item), 1)
    }
    return
};

export { choice, remove} ;