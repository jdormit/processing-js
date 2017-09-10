// Global functions
declare function ellipse(x: number, y: number, w: number, h?: number) : any;
declare function noFill() : any;

declare function createCanvas(w: number, h: number) : any;

declare function random(min?: number, max?: number) : number;
declare function random<T>(choices: T[]) : T;
declare function randomGaussian(mean?: number, stdDeviation?: number) : number;

// Global variables
declare const mouseIsPressed : boolean;
declare const mouseX : number;
declare const mouseY : number;
