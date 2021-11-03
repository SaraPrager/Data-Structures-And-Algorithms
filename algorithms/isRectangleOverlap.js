// https://leetcode.com/problems/rectangle-overlap/

const isRectangleOverlap = (rec1, rec2) => {
    let [rec1_x1, rec1_y1, rec1_x2, rec1_y2] = rec1;
    let [rec2_x1, rec2_y1, rec2_x2, rec2_y2] = rec2;

    if (isUnder(rec1_x1, rec2_x1, rec2_x2)) {
       return false;
    }

    if (isAbove(rec1_x2, rec2_x1, rec2_x2)) {
        return false;
    }

    if (isInRight(rec1_y2, rec2_y1, rec2_y2)) {
        return false;
    }

    if (isInLeft(rec1_y1, rec2_y1, rec2_y2)) {
        return false;
    }

    return true;
};

const isUnder = (rec1_x1, rec2_x1, rec2_x2) => {
    return rec2_x1 <= rec1_x1 && rec2_x2 <= rec1_x1;
}

const isAbove = (rec1_x2, rec2_x1, rec2_x2) => {
    return rec2_x1 >= rec1_x2 && rec2_x2 >= rec1_x2;
}

const isInRight = (rec1_y2, rec2_y1, rec2_y2) => {
    return rec2_y1 >= rec1_y2 && rec2_y2 >= rec1_y2;
}

const isInLeft = (rec1_y1, rec2_y1, rec2_y2) => {
    return rec2_y1 <= rec1_y1 && rec2_y2 <= rec1_y1;
}