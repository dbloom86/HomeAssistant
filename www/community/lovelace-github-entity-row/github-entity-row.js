import { html, LitElement } from 'https://unpkg.com/lit-element@2.0.1/lit-element.js?module';

class GithubEntityRow extends LitElement {

      static get properties() {
        return {
          _hass: {},
          _config: {},
        };
      }

      render() {
        return html`
          <style>
            .flex {
              display: flex;
              align-items: center;
              flex-wrap: nowrap;
            }
            .entity {
              display: inline-block;
              margin-right: 8px;
              text-align: right;
              min-width: 44px;
            }
            .entity:last-of-type {
              margin-right: 0;
            }
            .icon {
              color: var(--primary-color);
            }
          </style>
          <hui-generic-entity-row .hass="${this._hass}" .config="${this._config}">
            <div class="flex">
              <div class="entity" @click="${this.issues}"  title="Open issues">
                <ha-icon class="icon" icon="mdi:alert-circle-outline"></ha-icon>
                <span>${this.stateObjIssues.state}</span>
              </div>
              <div class="entity" @click="${this.pulls}" title="Open pull requests">
                <ha-icon class="icon" icon="mdi:source-pull"></ha-icon>
                <span>${this.stateObjPRs.state}</span>
              </div>
              <div class="entity" @click="${this.stars}" title="Stargazers">
                <ha-icon class="icon" icon="mdi:star"></ha-icon>
                <span>${this.stateObjStars.state}</span>
              </div>
            </div>
          </hui-generic-entity-row>
        `;
    }

    issues(e) { this.goto(e, 'issues'); }
    pulls(e) { this.goto(e, 'pulls'); }
    stars(e) { this.goto(e, 'stargazers'); }

    goto(event, path) {
        event.stopPropagation();
        window.open(`https://github.com/${this._config.repo}/${path}`);
    }

    setConfig(config) {
        if (!config.repo) throw new Error('Please define a GitHub repository path.');

        const sensor = config.sensor || config.repo.replaceAll('-', '_').replaceAll('/', '_');
        this._config = {
            ...config,
            name: config.name || config.repo,
            icon: config.icon || 'mdi:github',
            sensor: sensor,
            entity: `sensor.${sensor}_issues`, // required by ha-generic-entity-row
        };
    }

    getStateObject(hass, sensor, suffix) {
        const entity = `sensor.${sensor}_${suffix}`;
        return entity in hass.states ? hass.states[entity] : null;
    }

    set hass(hass) {
        this._hass = hass;

        if (hass && this._config) {
            this.stateObjStars = this.getStateObject(hass, this._config.sensor, 'stars');
            this.stateObjIssues = this.getStateObject(hass, this._config.sensor, 'issues');
            this.stateObjPRs = this.getStateObject(hass, this._config.sensor, 'pull_requests');
        }
    }
}

console.info(
    '%c GITHUB-ENTITY-ROW %c 2.1.0 ',
    'color: cyan; background: black; font-weight: bold;',
    'color: darkblue; background: white; font-weight: bold;'
);

customElements.define('github-entity-row', GithubEntityRow);
