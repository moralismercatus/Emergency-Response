// TODO also show the inventory?
Inventory = Class.create({
    initialize: function() {
        this.items = {};
    },
    add: function(item) {
        this.items[item.name] = item;
    },
    contains: function(itemName) {
         return this.items[itemName] != null;
    },
    remove: function(itemName) {
         delete this.items[itemName];
    }
});

/* No specific class for inventory items, but they have these properties:
        name: Used as both the display name and for identifying it within the scenario file.
        image: An image to display next to the item in the inventory.
        width, height: The width and height for the image
*/

jQuery(document).ready(function($) {
    $(document).on("addInventory", function(event, item) {
        player.inventory.add(item);
    });
    $(document).on("removeInventory", function(event, item) {
        player.inventory.remove(item);
    });
    $(document).on("addToScene", function(event, item) {
        delete scenario.inactiveProps[item];
        renderScene();
    });
    $(document).on("removeFromScene", function(event, item) {
        scenario.inactiveProps[item] = true;
        renderScene();
    });
    $(document).on("takeFromScene", function(event, item, sceneItem) {
        $(document).trigger("addInventory", item);
        $(document).trigger("removeFromScene", sceneItem);
    });
});
