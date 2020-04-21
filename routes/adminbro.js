const AdminBro = require("admin-bro");
const AdminBroSequelize = require("admin-bro-sequelizejs");
const AdminBroExpress = require("admin-bro-expressjs");

const db = require("../database/models");

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  databases: [db]
});

const router = AdminBroExpress.buildRouter(adminBro);

module.exports = router;
