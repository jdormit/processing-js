// Global functions
declare function ellipse(x: number, y: number, w: number, h?: number) : any;
declare function line(x1: number, y1: number, x2: number, y2: number) : any;
declare function noFill() : any;

declare function createCanvas(w: number, h: number) : any;

declare function random(min?: number, max?: number) : number;
declare function random<T>(choices: T[]) : T;
declare function randomGaussian(mean?: number, stdDeviation?: number) : number;

declare function radians(degrees: number) : number;

// Global variables
declare const mouseIsPressed : boolean;
declare const mouseX : number;
declare const mouseY : number;

// p5 object
declare const p5 : any;
