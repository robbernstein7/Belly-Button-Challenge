# Belly-Button-Challenge

GITHUB PAGE: https://robbernstein7.github.io/BBB-Github-Page/


Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

**Instructions
Complete the following steps:**

Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

**Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
**

Use sample_values as the values for the bar chart

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

![image](https://user-images.githubusercontent.com/119881903/230484770-6286d397-4ce0-4712-aa36-ccbebf109720.png)


**Create a bubble chart that displays each sample.**

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.

![image](https://user-images.githubusercontent.com/119881903/230484838-31caef87-636b-4b08-bab5-b0ff6d7afaba.png)

Display the sample metadata, i.e., an individual's demographic information.

Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://user-images.githubusercontent.com/119881903/230484890-21eb81bb-51f4-498c-a457-7d414d4f024a.png)

Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![image](https://user-images.githubusercontent.com/119881903/230484920-838182be-cfe0-40f4-ab48-6c3173ec27ba.png)

**Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file**

Hints
Use console.log inside of your JavaScript code to see what your data looks like at each step.

Refer to the Plotly.js documentationLinks to an external site. when building the plots.

**Requirements
Bar Chart (30 points)**
Chart initializes without error (10 points)

Chart updates when a new sample is selected (5 points)

Chart uses Top 10 sample values as values (5 points)

Chart uses otu_ids as the labels (5 points)

Chart uses otu_labels as the tooltip (5 points)

**Bubble Charts (40 points)**
Chart initializes without error (10 points)

Chart updates when a new sample is selected (5 points)

Chart uses otu_ids for the x values (5 points)

Chart uses otu_ids for marker colors (5 points)

Chart uses sample_values for the y values (5 points)

Chart uses sample_values for the marker size (5 points)

Chart uses `otu_labels for text values (5 points)

**Metadata and Deployment (30 points)**
Metadata initializes without error (10 points)

Metadata updates when a new sample is selected (10 points)

App Successfully Deployed to Github Pages (10 points)
