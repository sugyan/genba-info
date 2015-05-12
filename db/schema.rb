# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150512121859) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "editors", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "editors", ["email"], name: "index_editors_on_email", unique: true, using: :btree
  add_index "editors", ["reset_password_token"], name: "index_editors_on_reset_password_token", unique: true, using: :btree

  create_table "genbas", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "start_at",                    null: false
    t.datetime "end_at"
    t.text     "urls"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "location_id"
    t.boolean  "more_idols",  default: false, null: false
    t.boolean  "status",      default: false, null: false
  end

  add_index "genbas", ["location_id"], name: "index_genbas_on_location_id", using: :btree

  create_table "genbas_idols", id: false, force: :cascade do |t|
    t.integer "genba_id", null: false
    t.integer "idol_id",  null: false
  end

  add_index "genbas_idols", ["genba_id", "idol_id"], name: "index_genbas_idols_on_genba_id_and_idol_id", using: :btree
  add_index "genbas_idols", ["idol_id", "genba_id"], name: "index_genbas_idols_on_idol_id_and_genba_id", using: :btree

  create_table "idols", force: :cascade do |t|
    t.string   "name"
    t.string   "kana"
    t.string   "url"
    t.boolean  "status"
    t.text     "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string   "name"
    t.string   "url"
    t.string   "address"
    t.float    "lat"
    t.float    "lng"
    t.boolean  "status"
    t.text     "notes"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "geohash",    default: "", null: false
  end

  add_index "locations", ["geohash"], name: "index_locations_on_geohash", using: :btree
  add_index "locations", ["name"], name: "index_locations_on_name", unique: true, using: :btree

  create_table "sources", force: :cascade do |t|
    t.string   "provider",                null: false
    t.string   "keystr",                  null: false
    t.string   "title"
    t.datetime "start_at"
    t.string   "location"
    t.text     "description"
    t.text     "url"
    t.integer  "status",      default: 0, null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "sources", ["provider", "keystr"], name: "index_sources_on_provider_and_keystr", unique: true, using: :btree

  add_foreign_key "genbas", "locations"
end
