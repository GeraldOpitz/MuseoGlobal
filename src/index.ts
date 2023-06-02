import app from './server'
import './config/database'

// Iniciar el servidor

app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'))
})