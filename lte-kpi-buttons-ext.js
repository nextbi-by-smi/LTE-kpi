define([
        'jquery',
        /*'underscore',*/
        './properties',
        './initialproperties',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css',
        './lib/js/textFit'
    ],
    function ($, /*_,*/ props, initProps, extensionUtils, cssContent, textFit) {
        'use strict';
        $('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">').appendTo("head");

        extensionUtils.addStyleToHeader(cssContent);


        return {

            definition: props,
            initialProperties: initProps,

            paint: function ($element, layout) {

                $element.empty();

                $(document).ready(function () {
                    textFit(document.getElementsByClassName('panel-indicator')[0]);
                });

                var $kpiBox = $(document.createElement('div'));
                $kpiBox.addClass('bootstrap_kpi');
                $kpiBox.html(`

                 <div class="panel">
					<div class="panel-body">
						<div id="kpiContent" class="btn panel-indicator" style="text-align:` + layout.kpiAlignment + `;">
							<div id="kpiTitle" class="panel-indicator-title">` + layout.kpiTitle + `</div>
							<div class="panel-indicator-body">
								<i id="kpiIcon" class="bi panel-indicator-icon ` + layout.kpiIcon + `" style="color: ` + layout.kpiIconColor.color + `"></i>
								<span id="kpiValue" class="panel-indicator-value" style="color: ` + layout.kpiTextColor.color + `">` + layout.kpiValue + `</span>
							</div>
						</div>
					  </div>
				</div>
				`);

                $element.append($kpiBox);

            }
        };

    });
