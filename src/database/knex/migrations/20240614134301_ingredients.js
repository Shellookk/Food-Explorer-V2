
exports.up = knex => knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.text("title").notNullable();
    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable("ingredients")
