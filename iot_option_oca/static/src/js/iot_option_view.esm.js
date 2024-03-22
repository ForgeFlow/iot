/** @odoo-module */

import {registry} from "@web/core/registry";
import {IotOptionController} from "./iot_option_controller.esm";
import {IotOptionArchParser} from "./iot_option_arch_parser.esm";
import {IotOptionModel} from "./iot_option_model.esm";
import {IotOptionRenderer} from "./iot_option_renderer.esm";

export const iotOptionView = {
    type: "iot_option",
    display_name: "Iot Option",
    icon: "fa fa-picture-o", // The icon that will be displayed in the Layout panel
    multiRecord: true,
    Controller: IotOptionController,
    ArchParser: IotOptionArchParser,
    Model: IotOptionModel,
    Renderer: IotOptionRenderer,

    props(genericProps, view) {
        const {ArchParser} = view;
        const {arch} = genericProps;
        const archInfo = new ArchParser().parse(arch);

        return {
            ...genericProps,
            Model: view.Model,
            Renderer: view.Renderer,
            archInfo,
        };
    },
};

// Class IotOptionModel extends RelationalModel {
//     setup(params, services) {
//         this.effect = services.effect;
//         super.setup(...arguments);
//     }
// }
// IotOptionModel.Record = CrmFormRecord;
// IotOptionModel.services = [...RelationalModel.services, "effect"];

registry.category("views").add("iot_option", iotOptionView);
