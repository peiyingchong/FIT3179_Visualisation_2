var vg_1 = "aboriginal_suicide.vg.json"; 
vegaEmbed("#chloro_map_ind", vg_1).then(function(result) {}).catch(console.error);

var vg_2 = "leading_cause.vg.json"; 
vegaEmbed("#line_chart", vg_2).then(function(result) {
        }).catch(console.error);

var vg_3 = "Intentional self-harm.vg.json"; 
vegaEmbed("#radial_chart", vg_3).then(function(result) {
        }).catch(console.error);

var vg_4 = "non_aboriginal_suicide.vg.json"; 
vegaEmbed("#chloro_map_non", vg_4).then(function(result) {
        }).catch(console.error);

var vg_5 = "risk_factor.vg.json"; 
vegaEmbed("#parallel_c_plot", vg_5).then(function(result) {
        }).catch(console.error);


var vg_6 = "age_sex.vg.json"; 
vegaEmbed("#bar_plot", vg_6).then(function(result) {
        }).catch(console.error);