export const INSERT_POINTXY1 = "INSERT_POINTXY1"
export const INSERT_POINTXY2 = "INSERT_POINTXY2"
export const INSERT_POINTXY3 = "INSERT_POINTXY3"
export const INSERT_POINTXY4 = "INSERT_POINTXY4"
export const INSERT_POINTXY = "INSERT_POINTXY"


export const insetPointXY = (x, y) => ({
    type: INSERT_POINTXY1,
    x: x,
    y: y
})
export const insetPointXY1 = () => ({
    type: INSERT_POINTXY,
    x1: 10, y1: 10, x2: 300, y2: 10, x3: 10, y3: 300, x4: 300, y4: 300
})
export const insetPointXY2 = (x, y) => ({
    type: INSERT_POINTXY2,
    x: x,
    y: y
})
export const insetPointXY3 = (x, y) => ({
    type: INSERT_POINTXY3,
    x: x,
    y: y
})
export const insetPointXY4 = (x, y) => ({
    type: INSERT_POINTXY4,
    x: x,
    y: y
})