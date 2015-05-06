class TagsInputFormGroup extends React.Component {
    static get propTypes() {
        return {
            label: React.PropTypes.string
        };
    }
    handleChange(e) {
        console.log(e);
    }
    componentDidMount() {
        var cities = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [ { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    },
                     { "value": 2 , "text": "London"      , "continent": "Europe"    },
                     { "value": 3 , "text": "Paris"       , "continent": "Europe"    },
                     { "value": 4 , "text": "Washington"  , "continent": "America"   },
                     { "value": 5 , "text": "Mexico City" , "continent": "America"   },
                     { "value": 6 , "text": "Buenos Aires", "continent": "America"   },
                     { "value": 7 , "text": "Sydney"      , "continent": "Australia" },
                     { "value": 8 , "text": "Wellington"  , "continent": "Australia" },
                     { "value": 9 , "text": "Canberra"    , "continent": "Australia" },
                     { "value": 10, "text": "Beijing"     , "continent": "Asia"      },
                     { "value": 11, "text": "New Delhi"   , "continent": "Asia"      },
                     { "value": 12, "text": "Kathmandu"   , "continent": "Asia"      },
                     { "value": 13, "text": "Cairo"       , "continent": "Africa"    },
                     { "value": 14, "text": "Cape Town"   , "continent": "Africa"    },
                     { "value": 15, "text": "Kinshasa"    , "continent": "Africa"    }
            ]
        });
        cities.initialize();
        var input = $(React.findDOMNode(this.refs["input"]));
        input.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'cities',
                displayKey: 'text',
                source: cities.ttAdapter()
            }
        });
        input.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
        input.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
        input.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
        input.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
        input.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });
    }
    render() {
        return (
            <div className="form-group">
              <label className="control-label">{this.props.label}</label>
              <div className="form-control-static" style={{padding: 0}}>
                <input ref="input"
                       type="text"
                       value="Amsterdam,Washington,Sydney,Beijing,Cairo"
                       className="form-control"
                       onChange={this.handleChange.bind(this)} />
              </div>
            </div>
        );
    }
}
