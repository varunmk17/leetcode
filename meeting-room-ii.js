const minMeetingRooms = (intervals = []) => {
    if(!intervals || intervals.length < 1) return 0;
    let l = intervals.length;
    
    let [rooms, start, end, startArr, endArr] = [0, 0, 0, [], []];
    for(const [start, end] of intervals) {
        startArr.push(start)
        endArr.push(end)
    }
    
    const sortFn = (a, b) => a - b;
    startArr.sort(sortFn)
    endArr.sort(sortFn)
    
    while(start < l) {
        const [currStart, prevEnd] = [startArr[start], endArr[end]];
        const hasGap = prevEnd <= currStart;
        
        if(hasGap) {
            rooms--;
            end++;
        }
        
        rooms++;
        start++;
    }
    
    return rooms;
}

let intervals = [[0,30],[15,20],[30,40]];
const res = minMeetingRooms(intervals)
console.log(res)
