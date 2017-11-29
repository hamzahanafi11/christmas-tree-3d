function setup() {
	var canvas = createCanvas(600,600,WEBGL);
	canvas.parent('tree');
}
function draw() {
	background(122,122,122);
	stroke(255);
	var len    = 180;
	var branch = 180;
	translate(0,height/2,0);
	line(0,0,0,0,-height+60,0);
	translate(0,-len,0);
	rotateY(frameCount*0.01);
	root(branch);

}

function root(branch)
{
	if(branch > 1)
	{
		push();
			rotateY((PI/4));
				line(0,0,0,-branch,0,0);
				food(-branch);
				food(branch);
			rotateY((PI/2));
				line(0,0,0,-branch,0,0);
				food(-branch);
				food(branch);
			rotateY((PI/2));
				line(0,0,0,-branch,0,0);
				food(-branch);
				food(branch);
			rotateY((PI/2));
				line(0,0,0,-branch,0,0);
				food(-branch);
				food(branch);

		pop();
		translate(0,-20,0);
		root(branch-10);
	}
	else{
		stroke(0,250,0);
		fill(0,250,0);
		cone(-5,-5);
	}
}

function food(pos)
{
	push();
		stroke(250,0,0);
		fill(250,0,0);
			sphere(3,3);

		stroke(0,250,0);
		fill(0,250,0);
		translate(-pos/6,0);
			sphere(3,3);

		stroke(0,250,0);
		fill(0,250,0);
		translate(-pos/6,0);
			sphere(3,3);

		stroke(250,0,0);
		fill(250,0,0);
		translate(-pos/6,0);
			sphere(3,3);

		stroke(0,250,0);
		fill(0,250,0);
		translate(-pos/6,0);
			sphere(3,3);

		stroke(0,250,0);
		fill(0,250,0);
		translate(-pos/6,0);
			sphere(3,3);

		stroke(250,0,0);
		fill(250,0,0);
		translate(-pos/6,0);
			sphere(3,3);
	pop();
	 /**
	 * I had to set styles to default values because of this issue #2370
	 */
	stroke(255);
	fill(255);
}