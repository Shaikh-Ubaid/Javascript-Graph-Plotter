function plot_graph()
{
	var Xpoints=JSON.parse("["+document.querySelector('.Xpoints').value+"]");
	// var Xpoints=document.querySelector('.Xpoints').value.split(",");

	var Ypoints=JSON.parse("["+document.querySelector('.Ypoints').value+"]");
	Plotly.plot( graph, [{
	x: Xpoints,
	y: Ypoints,}], {
	margin: { t: 0 } } );
}