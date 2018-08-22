/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var util = require("util");

var nodePage = require("../../node_page");

function httpRequestNode(id) {
    nodePage.call(this, id);
}

util.inherits(httpRequestNode, nodePage);

httpRequestNode.prototype.setUrl = function(url) {
    browser.setValue('#node-input-url', url);
}

httpRequestNode.prototype.setMethod = function(method) {
    browser.selectByValue('#node-input-method', method);
}

httpRequestNode.prototype.setReturn = function(ret) {
    browser.selectByValue('#node-input-ret', ret);
}

module.exports = httpRequestNode;
