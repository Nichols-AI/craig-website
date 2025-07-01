import { motion } from 'framer-motion';
import { Download, Star, Github, Twitter, Bot, Zap, Shield, BarChart3, ArrowRight, Check } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">Craig</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">Features</a>
            <a href="#download" className="text-gray-600 hover:text-orange-600 transition-colors">Download</a>
            <a href="https://github.com/Nichols-AI/Craig" className="text-gray-600 hover:text-orange-600 transition-colors">GitHub</a>
            <a href="https://github.com/Nichols-AI/Craig/releases" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-600/90 transition-colors flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              The Multi-AI Desktop
              <br />
              <span className="gradient-text">Companion</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your AI coding workflow with a beautiful GUI that seamlessly manages 
              <strong className="text-orange-600"> Claude Code & Gemini CLI</strong>, creates custom agents, 
              and tracks usage across multiple AI providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://github.com/Nichols-AI/Craig/releases"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-600/90 transition-colors flex items-center space-x-2 text-lg font-medium"
              >
                <Download className="h-5 w-5" />
                <span>Download Craig</span>
              </a>
              <a 
                href="https://github.com/Nichols-AI/Craig"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors flex items-center space-x-2 text-lg font-medium"
              >
                <Github className="h-5 w-5" />
                <span>View on GitHub</span>
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>Free & Open Source</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="h-4 w-4 text-blue-500" />
                <span>Cross Platform</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need for <span className="gradient-text">Multi-AI Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Craig builds upon Claudia's foundation with powerful multi-AI capabilities, 
              giving you the best of both Claude Code and Gemini CLI in one elegant interface.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Multi-AI Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-600/10 rounded-lg flex items-center justify-center mb-6">
                <Bot className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-AI Provider Support</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly switch between Claude Code and Gemini CLI without losing context. 
                One interface, multiple AI powerhouses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Claude Code Pro support</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Gemini CLI integration</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Mid-conversation switching</span>
                </li>
              </ul>
            </motion.div>

            {/* Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Provider-Aware Analytics</h3>
              <p className="text-gray-600 mb-4">
                Track usage and costs across all AI providers with beautiful charts and detailed breakdowns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Cross-provider cost tracking</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Usage visualization</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Export capabilities</span>
                </li>
              </ul>
            </motion.div>

            {/* Enhanced Agents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-AI Custom Agents</h3>
              <p className="text-gray-600 mb-4">
                Create powerful custom agents that can leverage any AI provider for specialized tasks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Provider-agnostic agents</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Secure sandboxing</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Execution history</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Advanced Sandboxing</h4>
              <p className="text-sm text-gray-600">OS-level security with granular permissions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Timeline & Checkpoints</h4>
              <p className="text-sm text-gray-600">Visual session history with instant restore</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-purple-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">MCP Integration</h4>
              <p className="text-sm text-gray-600">Model Context Protocol server management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cross-Platform</h4>
              <p className="text-sm text-gray-600">Windows, macOS, and Linux support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to transform your <span className="gradient-text">AI workflow</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download Craig today and experience the power of multi-AI development in one beautiful interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://github.com/Nichols-AI/Craig/releases"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-600/90 transition-colors flex items-center space-x-2 text-lg font-medium"
            >
              <Download className="h-5 w-5" />
              <span>Download for Free</span>
            </a>
            <a 
              href="https://github.com/Nichols-AI/Craig"
              className="text-orange-600 hover:text-orange-600/80 transition-colors flex items-center space-x-2 text-lg"
            >
              <span>View Documentation</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Forked from <a href="https://claudia.asterisk.so/" className="text-orange-600 hover:underline">Claudia</a> by Asterisk • Enhanced with ❤️ by NicholsAI
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-orange-600" />
              <span className="text-lg font-semibold text-gray-900">Craig</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/Nichols-AI/Craig" className="text-gray-600 hover:text-orange-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/nichols_ai" className="text-gray-600 hover:text-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>&copy; 2025 NicholsAI. Licensed under AGPL-3.0. Built with love for the AI development community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;