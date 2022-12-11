const insert = (intervals, newInterval) => {
    if(!intervals && !newInterval) return [];
    if(intervals.length < 1 && newInterval.length > 0) return [newInterval];
    if(intervals.length > 0 && newInterval.length < 1) return intervals;

    let res = [];

    for(let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const [newStart, newEnd] = newInterval;

        if(newEnd < start) {
            res.push(newInterval, ...intervals.slice(i));
            
            return res;
        } else if(newStart > end) {
            res.push(intervals[i])
        } else {
            newInterval = [Math.min(start, newStart), Math.max(end, newEnd)]
        }
    }
 
    res.push(newInterval)

    return res;
};

export default insert;

/*
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]`
Output: [[1,5],[6,9]]

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
*/