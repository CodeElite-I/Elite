class HomeController {
  async index(req, res) {
    res.json({ user: 'novoUser' });
  }
}

export default new HomeController();
