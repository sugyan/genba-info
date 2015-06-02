# coding: utf-8
class Admin::LocationsController < AdminController
  before_action :set_location, only: [:show, :edit, :update, :destroy]

  # GET /admin/locations
  def index
    respond_to do |format|
      format.html { @locations = Location.order(:geohash => :desc).page(params[:page]).per(25) }
      format.json { @locations = Location.order(:geohash => :desc) }
    end
  end

  # GET /admin/locations/1
  def show
  end

  # GET /admin/locations/new
  def new
    @location = Location.new
  end

  # GET /admin/locations/1/edit
  def edit
  end

  # POST /admin/locations
  def create
    @location = Location.new(location_params)
    if @location.save
      redirect_to editor_location_url(@location), notice: "登録されました"
    else
      render :new
    end
  end

  # PATCH/PUT /admin/locations/1
  def update
    if @location.update(location_params)
      redirect_to editor_location_url(@location), notice: "更新されました"
    else
      render :edit
    end
  end

  # DELETE /admin/locations/1
  def destroy
    @location.destroy
    redirect_to editor_locations_url, notice: "削除されました"
  end

  private

  def set_location
    @location = Location.find(params[:id])
  end

  def location_params
    p = params.require(:location).permit(:name, :address, :url, :lat, :lng, :administrative_area, :locality)
    p[:geohash] = GeoHash.encode(p[:lat].to_f, p[:lng].to_f)
    p
  end
end
