// URL with data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Display default plots
function init() {

    // Use D3 to select dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Get JSON data and console log
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // Array of id names
        let names = data.names;

        // Iterate through array
        names.forEach((name) => {
            // Append and add each name as an option to the drop down menu
            dropdownMenu.append("option").text(name).property("value", name);
        });

        // Assign first name to name variable
        let name = names[0];

        // Call functions to make demo panel, bar chart, and bubble chart
        demo(name);
        bar(name);
        bubble(name);
    });
}

// Make demo panel
function demo(selectedValue) {
    // Get JSON data
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // Array of metadata
        let metadata = data.metadata;
        
        // Filter data after converting their types 
        let filteredData = metadata.filter((meta) => meta.id == selectedValue);
      
        // Make first object to obj variable
        let obj = filteredData[0]
        
        // Use D3 to clear child elements in div with id sample-metadata
        d3.select("#sample-metadata").html("");
  
        // Returns an array of a given object 
        let entries = Object.entries(obj);
        
        // Iterate through the entries array
        entries.forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });

        // Log entries Array
        console.log(entries);
    });
  }

// Make bar chart
function bar(selectedValue) {
    // Get the JSON data and console log
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // Array of sample objects
        let samples = data.samples;

        // Filter data where id = selected value 
        let filteredData = samples.filter((sample) => sample.id === selectedValue);

        // Set the first object to the obj variable
        let obj = filteredData[0];
        
        // Trace for the data for the horizontal bar chart
        let trace = [{
            // Slice the top 10 OTUs
            x: obj.sample_values.slice(0,10).reverse(),
            y: obj.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: obj.otu_labels.slice(0,10).reverse(),
            type: "bar",
            marker: {
                color: "rgb(166,172,237)"
            },
            orientation: "h"
        }];
        
        // Use Plotly to plot data onto the bar chart
        Plotly.newPlot("bar", trace);
    });
}
  
// Make bubble chart
function bubble(selectedValue) {
    // Get JSON data and console log it
    d3.json(url).then((data) => {

        // Array of sample objects
        let samples = data.samples;
    
        // Filter data where id = selected value 
        let filteredData = samples.filter((sample) => sample.id === selectedValue);
    
        // Set the first object to the obj variable
        let obj = filteredData[0];
        
        // Trace for the data for the bubble chart
        let trace = [{
            x: obj.otu_ids,
            y: obj.sample_values,
            text: obj.otu_labels,
            mode: "markers",
            marker: {
                size: obj.sample_values,
                color: obj.otu_ids,
                colorscale: "Sunset"
            }
        }];
    
        // Put the x-axis lengend in the layout
        let layout = {
            xaxis: {title: "OTU ID"}
        };
    
        // Use Plotly to plot the data onto the bubble chart
        Plotly.newPlot("bubble", trace, layout);
    });
}

// Switch to new plots when option changed
function optionChanged(selectedValue) {
    demo(selectedValue);
    bar(selectedValue);
    bubble(selectedValue)
}

init();



















