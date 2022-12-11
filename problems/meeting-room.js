/**
 * 
 * @param {Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
 *   determine if a person could attend all meetings.} 
 * @returns 
 */
const canAttendMeetings = (intervals = []) => {
    if(!intervals || intervals.length < 1) return true;
    
    intervals.sort((a, b) => a[0] - b[0]);
    let l = intervals.length;
    let curr = intervals[0];
    
    for(let i = 1; i < l; i++) {
        const [start, end] = curr;
        const [nextStart, nextEnd] = intervals[i];
        
        if(nextStart < end) {
            return false;
        } else {
            curr = [Math.min(start, nextStart), Math.max(end, nextEnd)]
        }
    }
    
    return true;
}

// let intervals = [[0,30],[5,10],[15,20]];
let intervals = [[5,8],[9,15]]
const res = canAttendMeetings(intervals);
console.log(res)
