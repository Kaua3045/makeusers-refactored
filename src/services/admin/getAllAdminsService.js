const AdminRepository = require('../../repositories/admin/adminRepository')

module.exports = {
  async getAllAdmins() {
    const adminRepository = new AdminRepository()
    const admins = await adminRepository.findAllAdmins()

    return admins
  }
}