/** @odoo-module */

import {XMLParser} from "@web/core/utils/xml";
import {Field} from "@web/views/fields/field";

export class IotOptionArchParser extends XMLParser {
    parse(arch, models, modelName, jsClass) {
        const fieldNodes = {};
        this.visitXML(arch, (node) => {
            if (node.tagName === "field") {
                const fieldInfo = Field.parseFieldNode(
                    node,
                    models,
                    modelName,
                    "list",
                    jsClass
                );
                fieldNodes[fieldInfo.name] = fieldInfo;
                node.setAttribute("field_id", fieldInfo.name);
                return false;
            }
        });
        return {fieldNodes};
    }
}
