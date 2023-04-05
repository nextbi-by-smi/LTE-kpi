define([], function () {
        'use strict';

        // ****************************************************************************************
        // Dimensions & Measures
        // ****************************************************************************************
        var dimensions = {
            uses: "dimensions",
            min: 0,
            max: 1
        };

        var measures = {
            uses: "measures",
            min: 0,
            max: 1
        };

        var sorting = {
            uses: "sorting"
        };

        var appearance = {
            uses: "settings"
        };

        // ****************************************************************************************
        // Other Settings
        // ****************************************************************************************

        var kpi_title = {
            ref: "kpiTitle",
            label: "Titolo KPI:",
            type: "string",
            expression: "optional",
            defaultValue: "Titolo KPI"
        };

        var kpi_value = {
            ref: "kpiValue",
            label: "Valore KPI:",
            type: "string",
            expression: "optional",
            defaultValue: "Valore KPI"
        };

        var kpi_icon = {
            ref: "kpiIcon",
            label: "Icona KPI:",
            component: "dropdown",
            type: "string",
            options: [{
                value: "",
                label: "Default"
            }, {
                value: "bi-clock-fill",
                label: "Tempo"
            }, {
                value: "bi-clipboard2-pulse-fill",
                label: "Medico"
            }, {
                value: "bi-buildings-fill",
                label: "Fabbrica"
            }, {
                value: "bi-sign-stop-fill",
                label: "Stop"
            }, {
                value: "bi-person-fill",
                label: "Dipendente"
            }, {
                value: "bi-person-fill-check",
                label: "Dip. Presente"
            }, {
                value: "bi-person-fill-dash",
                label: "Dip. Assenza Pianificata"
            }, {
                value: "bi-person-fill-exclamation",
                label: "Dip. Assenza Non Pianificata"
            }, {
                value: "bi-person-fill-slash",
                label: "Dip. Assenteismo"
            }, {
                value: "bi-person-fill-up",
                label: "Dip. Formazione"
            }, {
                value: "bi-person-fill-x",
                label: "Dip. Assente"
            }, {
                value: "bi-person-vcard-fill",
                label: "Dip. Formazione 2"
            }]
        };

        var kpi_icon_color = {
            ref: "kpiIconColor",
            label: "Colore Icona:",
            component: "color-picker",
            type: "object",
            defaultValue: {
                color: "#006580",
                index: "-1"
            }
        };

        var kpi_text_color = {
            ref: "kpiTextColor",
            label: "Colore Testo:",
            component: "color-picker",
            type: "object",
            defaultValue: {
                color: "#006580",
                index: "-1"
            }
        };

        var kpi_alignment_info = {
            ref: "kpiAlignment",
            label: "Allineamento Parametri KPI:",
            component: "dropdown",
            type: "string",
            options: [{
                value: "left",
                label: "Sinistra"
            }, {
                value: "right",
                label: "Destra"
            }, {
                value: "center",
                label: "Centro"
            }]
        };

        // ****************************************************************************************
        // Property Panel Definition
        // ****************************************************************************************

        return {
            //type: "items", //<== working also without type: "items"
            component: "accordion",
            items: {
                dimensions: dimensions,
                measures: measures,
                sorting: sorting,
                appearance: appearance,

                myCustomSection: {
                    //type: "items", //<== not necessary to define "items"
                    component: "expandable-items",
                    label: "KPI",
                    items: {
                        section1: {
                            type: "items",
                            label: "Configurazione KPI",
                            items: {
                                kpi_title: kpi_title,
                                kpi_value: kpi_value,
                                kpi_icon: kpi_icon,
                                kpi_icon_color: kpi_icon_color,
                                kpi_text_color: kpi_text_color,
                                kpi_alignment_info: kpi_alignment_info
                            }
                        },
                    }
                }
            }

        };
    }
)
;
