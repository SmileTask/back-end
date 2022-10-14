import { app} from './index.js';

// settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

app.listen(app.get('port'))