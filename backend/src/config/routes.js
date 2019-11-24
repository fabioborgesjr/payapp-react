const express = require('express')

module.exports = server => {
    
    // Base URL
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Ciclo de Pagamento
    const billingCycle = require('../api/billingCycle/service')
    billingCycle.register(router, '/billingCycles')
}